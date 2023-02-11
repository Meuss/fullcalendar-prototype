const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const t = `${year}-${month}-${day}`;

export const events = [
	{
		start: `${t}T08:00:00`,
		end: `${t}T12:00:00`,
		resourceId: 'a',
		startTime: '08:00', // recurring event
		endTime: '12:00', // recurring event
		extendedProps: {
			therapist: 'Joao'
		},
		color: 'rgba(255, 0, 0, 0.2)'
	},
	{
		start: `${t}T08:00:00`,
		end: `${t}T10:00:00`,
		resourceId: 'c',
		extendedProps: {
			therapist: 'Joao',
			client: 'Eric Constantin',
			service: 'Kobido'
		},
		color: 'rgba(255, 0, 0, 0.2)'
	},
	{
		start: `${t}T16:00:00`,
		end: `${t}T17:00:00`,
		resourceId: 'c',
		extendedProps: {
			therapist: 'Raphaël',
			client: 'Jean-Louis Bussignon',
			service: 'Gommage'
		},
		color: 'rgba(0, 255, 0, 0.2)'
	},
	{
		start: `${t}T13:00:00`,
		end: `${t}T14:30:00`,
		resourceId: 'b',
		extendedProps: {
			therapist: 'Raphaël',
			client: 'Jean-Louis Bussignon',
			service: 'Gommage'
		},
		color: 'rgba(0, 255, 0, 0.2)'
	},
	{
		start: `${t}T13:00:00`,
		end: `${t}T18:00:00`,
		resourceId: 'a',
		startTime: '13:00', // recurring event
		endTime: '18:00', // recurring event
		extendedProps: {
			therapist: 'Calvin'
		},
		color: 'rgba(0, 0, 255, 0.2)'
	},
	{
		start: `${t}T08:00:00`,
		end: `${t}T10:30:00`,
		resourceId: 'b',
		extendedProps: {
			therapist: 'Mehdi',
			client: 'Jean-Paul Blabla',
			service: 'Massage'
		},
		color: 'rgba(150, 0, 255, 0.2)'
	},
	{
		start: `${t}T13:00:00`,
		end: `${t}T14:30:00`,
		resourceId: 'c',
		extendedProps: {
			therapist: 'Mehdi',
			client: 'Jean-Luc Crouillac',
			service: 'Massage'
		},
		color: 'rgba(150, 0, 255, 0.2)'
	}
];
