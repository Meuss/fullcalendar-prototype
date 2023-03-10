<script>
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import interactionPlugin from '@fullcalendar/interaction';
	import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
	import { dayEvents } from '$lib/data/dayEvents.js';
	import { rooms } from '$lib/data/rooms.js';
	import { therapists } from '$lib/data/therapists.js';

	// Prepare the events for therapists view
	const events = dayEvents.map((event) => {
		const therapist = therapists.find(
			(therapist) => therapist.id === event.extendedProps.therapist
		);
		return {
			...event,
			resourceId: event.extendedProps.therapist,
			extendedProps: {
				...event.extendedProps,
				therapist: therapist.title,
				roomName: rooms.find((room) => room.id === event.extendedProps.room).title
			},
			color: therapist.color
		};
	});

	let calendarDiv;
	let calendar;
	// initial number of therapists to show
	const initialResourceCount = 4;
	const settings = {
		plugins: [interactionPlugin, resourceTimeGridPlugin],
		initialView: 'resourceTimeGridDay',
		eventDisplay: 'block',
		locale: 'fr-ch',
		scrollTime: '07:30:00',
		editable: true,
		height: 800,
		eventBackgroundColor: '#d9bd97',
		selectable: true,
		select: function (e) {
			const newEvent = {
				start: e.startStr,
				end: e.endStr,
				resourceId: e.resource._resource.id,
				extendedProps: {
					roomName: 'todo'
				},
				color: e.resource.extendedProps.color
			};
			calendar.addEvent(newEvent);
		},
		titleFormat: {
			year: 'numeric',
			month: 'long',
			day: '2-digit',
			weekday: 'long',
			omitCommas: true
		},
		allDaySlot: false,
		slotLabelFormat: {
			hour: '2-digit',
			minute: '2-digit',
			omitZeroMinute: false
		},
		buttonText: {
			today: "Aujourd'hui"
		},
		views: {
			resourceDay: {
				type: 'resourceTimeGrid',
				buttonText: 'day',
				duration: { days: 1 }
			}
		},
		businessHours: {
			daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
			startTime: '08:00',
			endTime: '18:00'
		}
	};
	onMount(() => {
		calendar = new Calendar(calendarDiv, {
			...settings,
			events,
			resources: therapists.slice(0, initialResourceCount),
			eventContent: (arg) => {
				let div = document.createElement('div');
				div.classList.add('event-content');

				let html = `
					<div><strong>${arg.event.extendedProps.roomName}</strong> ${arg.timeText}</div>
				`;
				if (arg.event.extendedProps.client) {
					html += `
						<div>
							${arg.event.extendedProps.client}
						</div>
					`;
				}
				if (arg.event.extendedProps.service) {
					html += `
						<div>
							${arg.event.extendedProps.service}
						</div>
					`;
				}
				div.innerHTML = html;
				let arrayOfDomNodes = [div];
				return { domNodes: arrayOfDomNodes };
			},
			// example of working mouse events
			// eventClick: function (info) {
			// 	console.log(info);
			// },
			// eventMouseEnter: function (info) {
			// 	console.log('MouseEnter event!', info);
			// },
			// eventMouseLeave: function (info) {
			// 	console.log('MouseLeave event!', info);
			// },
			eventDragStop: (info) => {
				alert('eventDragStop, info in console');
				console.log(info);
			},
			eventResizeStop: (info) => {
				alert('eventResizeStop, info in console');
				console.log(info);
			}
		});
		calendar.render();
	});

	// Toggling therapists
	function toggleResource(event) {
		const res = therapists.find((resource) => resource.id === event.target.id);
		if (event.target.checked) {
			calendar.addResource(res);
		} else {
			const resToRemove = calendar.getResourceById(res.id);
			if (resToRemove) {
				resToRemove.remove();
			}
		}
	}
	function reset() {
		// remove all therapists
		const all = calendar.getTopLevelResources();
		all.forEach((resource) => resource.remove());
		const checkboxes = document.querySelectorAll('input[type="checkbox"]');
		checkboxes.forEach((checkbox) => (checkbox.checked = false));
		// add the initial therapists
		for (let i = 0; i < initialResourceCount; i++) {
			calendar.addResource(therapists[i]);
			checkboxes[i].checked = true;
		}
	}
</script>

<svelte:head>
	<title>Agenda Personnel</title>
	<meta name="description" content="Agenda - Personnel" />
</svelte:head>

<div class="container">
	<aside>
		<h1>Personnel</h1>
		<div class="options">
			{#each therapists as therapist, index}
				<label>
					{#if index < initialResourceCount}
						<input type="checkbox" id={therapist.id} on:change={toggleResource} checked />
					{:else}
						<input type="checkbox" id={therapist.id} on:change={toggleResource} />
					{/if}
					{therapist.title}
				</label>
			{/each}
			<button on:click={reset}>Reset</button>
		</div>
	</aside>
	<div bind:this={calendarDiv} />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 8fr;
		gap: 1rem;
	}
	.options {
		display: flex;
		flex-direction: column;
	}
	input[type='checkbox'] {
		margin-right: 1rem;
	}
	label {
		cursor: pointer;
	}
	button {
		margin-top: 1rem;
		cursor: pointer;
	}
</style>
