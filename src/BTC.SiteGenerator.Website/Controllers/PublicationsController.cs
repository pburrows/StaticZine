using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using BTC.SiteGenerator.Website.Models;

namespace BTC.SiteGenerator.Website.Controllers
{
    [RoutePrefix("api/publications")]
    public class PublicationsController : ApiController
    {
        [HttpGet]
        public Task<IEnumerable<PublicationsListViewModel>>  GetPublications()
        {
            return null;
        }
    }
}
