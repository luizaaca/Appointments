using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAppAngular1.Models.Appointments;

namespace WebAppAngular1.API.Controllers
{
    public class AppointmentsController : ApiController
    {
        // GET: api/Appointments
        public IEnumerable<Appointment> Get()
        {
            var result = new List<Appointment>();

            result.Add(new Appointment
            {
                Id = 0,
                Date = DateTime.Now.AddDays(1),
                Length = TimeSpan.FromHours(1),
                Patient = "João Barbosa"
            });

            result.Add(new Appointment
            {
                Id = 1,
                Date = DateTime.Now.AddDays(1).AddHours(-2),
                Length = TimeSpan.FromHours(1.5),
                Patient = "Maria Silva"
            });

            return result;
        }

        // GET: api/Appointments/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Appointments
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Appointments/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Appointments/5
        public void Delete(int id)
        {
        }
    }
}
