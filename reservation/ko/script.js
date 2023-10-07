document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: false,
    events: [
      {
        title: '신청',
        start: '2023-10-11',
        className: 'apply-button',
        url: 'https://forms.gle/wTtW4iDormmXZL9P8',
      },
      {
        title: '신청',
        start: '2023-10-13',
        className: 'apply-button',
        url: 'https://forms.gle/AM1uWD6aWCe5XN2P8',
      },
      {
        title: '신청',
        start: '2023-10-14',
        className: 'apply-button',
        url: 'https://forms.gle/bcs8XRPygZRK4tV56',
      },
    ],
  });

  calendar.render();
});
