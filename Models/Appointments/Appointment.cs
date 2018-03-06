using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppAngular1.Models.Appointments
{
    public class Appointment
    {
        public int Id { get; set; }
        public string Patient { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Length { get; set; }
    }
}