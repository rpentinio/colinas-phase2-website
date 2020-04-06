using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ColinasPhase2Website.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ColinasPhase2Website.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResidentsAddController : ControllerBase
    {
        private Q722BxgwCnContext _context;

        public ResidentsAddController(Q722BxgwCnContext context)
        {
            _context = context;
        }

        [HttpPost("[action]")]
        public string Add([FromBody] Residents resident)
        {
            if (resident != null)
            {
                _context.AddResident(resident);
                return "New user was added.";
            }

            return "An issue was encountered.";
        }
    }
}