using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTC.SiteGenerator.Website.Data.Domain
{
    public class Publication
    {
        public int PublicationId { get; set; }
    }

    public class Issue
    {
        public int IssueId { get; set; }
    }

    public class Article
    {
        public int ArticleId { get; set; }
        public virtual ArticleTemplate ArticleTemplate { get; set; }
        public int ArticleTemplateId { get; set; }
    }

    public class ArticleTemplate
    {
        public ArticleTemplate()
        {
            Sections = new List<ArticleTemplateSection>();
        }

        public int ArticleTemplateId { get; set; }
        public string Name { get; set; }

        public ICollection<ArticleTemplateSection> Sections { get; set; }
    }

    public class ArticleTemplateSection
    {
        public int ArticleTemplateSectionId { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
    }
}
