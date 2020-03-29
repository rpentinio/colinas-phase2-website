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
    public class ResidentsListController : ControllerBase
    {
        private Q722BxgwCnContext _context;

        public ResidentsListController(Q722BxgwCnContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Residents> Get()
        {
            var residentsData = _context.GetAllResidents();

            return residentsData;
        }
    }
}