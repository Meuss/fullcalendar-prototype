const regularHours = {
	daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
	startTime: '08:00',
	endTime: '18:00'
};
export const therapists = [
	{
		id: '1',
		title: 'Joao',
		color: 'rgba(255, 0, 0, 0.2)',
		businessHours: regularHours
	},
	{
		id: '2',
		title: 'Raphaël',
		color: 'rgba(0, 255, 0, 0.2)',
		businessHours: {
			daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
			startTime: '12:00',
			endTime: '17:00'
		}
	},
	{
		id: '3',
		title: 'Calvin',
		color: 'rgba(0, 0, 255, 0.2)',
		businessHours: regularHours
	},
	{
		id: '4',
		title: 'Mehdi',
		color: 'rgba(255, 0, 255, 0.2)',
		businessHours: {
			daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
			startTime: '08:00',
			endTime: '15:00'
		}
	}
];
