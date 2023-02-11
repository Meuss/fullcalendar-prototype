<script>
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import interactionPlugin from '@fullcalendar/interaction';
	import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
	import { events } from '$lib/data/events.js';
	import { resources } from '$lib/resources.js';

	let calendarDiv;
	let calendar;
	// initial number of resources to show
	const initialResourceCount = 3;
	const settings = {
		plugins: [interactionPlugin, resourceTimeGridPlugin],
		initialView: 'resourceTimeGridDay',
		eventDisplay: 'block',
		locale: 'fr-ch',
		scrollTime: '07:30:00',
		editable: true,
		height: 800,
		eventBackgroundColor: '#d9bd97',
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
			resources: resources.slice(0, initialResourceCount),
			eventContent: (arg) => {
				let div = document.createElement('div');
				div.classList.add('event-content');

				let html = `
					<div><strong>${arg.event.extendedProps.therapist}</strong> ${arg.timeText}</div>
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

	// Toggling resources
	function toggleResource(event) {
		// get the appropriate resource
		const res = resources.find((resource) => resource.id === event.target.id);
		// add or remove it from calendar
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
		// remove all resources
		const all = calendar.getTopLevelResources();
		all.forEach((resource) => resource.remove());
		const checkboxes = document.querySelectorAll('input[type="checkbox"]');
		checkboxes.forEach((checkbox) => (checkbox.checked = false));
		// add the initial resources
		for (let i = 0; i < initialResourceCount; i++) {
			calendar.addResource(resources[i]);
			checkboxes[i].checked = true;
		}
	}
</script>

<svelte:head>
	<title>Agenda salles</title>
	<meta name="description" content="Agenda - Salles" />
</svelte:head>

<div class="container">
	<aside>
		<h1>Salles</h1>
		<div class="options">
			{#each resources as resource, index}
				<label>
					{#if index < initialResourceCount}
						<input type="checkbox" id={resource.id} on:change={toggleResource} checked />
					{:else}
						<input type="checkbox" id={resource.id} on:change={toggleResource} />
					{/if}
					{resource.title}
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
