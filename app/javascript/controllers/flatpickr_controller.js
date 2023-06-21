import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";

function startTime() {
  flatpickr(".start_time", {
    enableTime: true,
    // human friendly date with time ex: April 24, 2015 11:15 PM
    dateFormat: "F j, Y h:i K",
  });
}

function endTime() {
  flatpickr(".end_time", {
    dateFormat: "F j, Y",
    disable: [
      function (date) {
        // return true to disable for these days
        return date.getDay() === 0 || date.getDay() === 6;
      },
    ],
    locale: {
      firstDayOfWeek: 1, //start week on Monday (just for the view)
    },
  });
}

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    startTime();
    endTime();
  }
}
