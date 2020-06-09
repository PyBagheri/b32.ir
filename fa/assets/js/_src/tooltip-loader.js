/**
 * Initial Bootstrap Tooltip.
 * v2.0
 * https://github.com/cotes2020/jekyll-theme-chirpy
 * © 2019 Cotes Chung
 * MIT License
*/
$(function () {
  // Using here because it's included everywhere.
  function convertToJalaliDate() {
    $(".jalali").each(function() {
      var main_text = '';
      if ($(this).hasClass('jalali-tooltip')) {
        main_text = $(this).attr('title');
      } else {
        main_text = $(this).text();
      }
      var today = new Date(main_text).toLocaleDateString('fa-IR').split("/");
      var month = today[1].replace("۱۰", "دی")
                          .replace("۱۱", "بهمن")
                          .replace("۱۲", "اسفند")
                          .replace("۱", "فروردین")
                          .replace("۲", "اردیبهشت")
                          .replace("۳", "خرداد")
                          .replace("۴", "تیر")
                          .replace("۵", "مرداد")
                          .replace("۶", "شهریور")
                          .replace("۷", "مهر")
                          .replace("۸", "آبان")
                          .replace("۹", "آذر")
      if (!$(this).hasClass('jalali-noweekday')) {
        var weekday = main_text.split(',')[0].replace("Mon", 'دوشنبه')
                                             .replace("Tue", 'سه‌شنبه')
                                             .replace("Wed", 'چهارشنبه')
                                             .replace("Thu", 'پنجشنبه')
                                             .replace("Fri", 'جمعه')
                                             .replace("Sat", 'شنبه')
                                             .replace("Sun", 'یکشنبه')
      }
      if (!$(this).hasClass('jalali-noweekday')) {
        if ($(this).hasClass('jalali-tooltip')) {
          $(this).attr('title', [weekday + '، ', today[2], month, today[0]].join(" "))
        } else {
          $(this).text([weekday + '، ', today[2], month, today[0]].join(" "))
        }
      } else {
        if ($(this).hasClass('jalali-tooltip')) {
          $(this).attr('title', [today[2], month, today[0]].join(" "))
        } else {
          $(this).text([today[2], month, today[0]].join(" "))
        }
      }
    });
  }

  convertToJalaliDate();

  $('[data-toggle="tooltip"]').tooltip();
})
