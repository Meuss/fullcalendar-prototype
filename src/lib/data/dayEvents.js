const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const t = `${year}-${month}-${day}`;

export const dayEvents = [
	{
		start: `${t}T08:00:00`,
		end: `${t}T12:00:00`,
		startTime: '08:00', // recurring event
		endTime: '12:00', // recurring event
		extendedProps: {
			room: 'a',
			therapist: '1'
		}
	},
	{
		start: `${t}T14:30:00`,
		end: `${t}T16:00:00`,
		extendedProps: {
			room: 'b',
			therapist: '1',
			client: 'Eric Constantin',
			service: 'Kobido'
		}
	},
	{
		start: `${t}T16:00:00`,
		end: `${t}T17:00:00`,
		extendedProps: {
			room: 'c',
			therapist: '2',
			client: 'Jean-Louis Bussignon',
			service: 'Gommage'
		}
	},
	{
		start: `${t}T13:00:00`,
		end: `${t}T14:30:00`,
		extendedProps: {
			room: 'b',
			therapist: '2',
			client: 'Jean-Louis Bussignon',
			service: 'Gommage'
		}
	},
	{
		start: `${t}T13:00:00`,
		end: `${t}T18:00:00`,
		startTime: '13:00', // recurring event
		endTime: '18:00', // recurring event
		extendedProps: {
			room: 'a',
			therapist: '3'
		}
	},
	{
		start: `${t}T08:00:00`,
		end: `${t}T10:30:00`,
		extendedProps: {
			room: 'b',
			therapist: '4',
			client: 'Jean-Paul Blabla',
			service: 'Massage'
		}
	},
	{
		start: `${t}T13:00:00`,
		end: `${t}T14:30:00`,
		extendedProps: {
			room: 'c',
			therapist: '4',
			client: 'Jean-Luc Crouillac',
			service: 'Massage'
		}
	}
];
