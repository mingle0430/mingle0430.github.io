document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: false,
    events: [
      {
        title: '申请',
        start: '2023-10-06',
        className: 'apply-button',
        url: 'https://forms.gle/oj5Sz1rD8Heu5gUf9',
      },
      {
        title: '申请',
        start: '2023-10-07',
        className: 'apply-button',
        url: 'https://forms.gle/3ycaVZttmcU64kq67',
      },
      {
        title: '申请',
        start: '2023-10-11',
        className: 'apply-button',
        url: 'https://forms.gle/bPatvsGhf2B3ykAU9',
      },
      {
        title: '申请',
        start: '2023-10-13',
        className: 'apply-button',
        url: 'https://forms.gle/vRd1NSViC8LXzY1z7',
      },
      {
        title: '申请',
        start: '2023-10-14',
        className: 'apply-button',
        url: 'https://forms.gle/QWFLWi2ae84DwYfG6',
      },
    ],
  });

  calendar.render();
});
