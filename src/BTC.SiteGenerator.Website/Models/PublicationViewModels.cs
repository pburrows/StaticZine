using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTC.SiteGenerator.Website.Models
{
    public class PublicationsListViewModel
    {
        public int PublicationId { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateLastModified { get; set; }
        public string Name { get; set; }
    }
}
