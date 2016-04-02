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
        public DateTime DateCreated { get; set; }
        public DateTime DateLastModified { get; set; }
        public string Name { get; set; }
    }

    public class Issue
    {
        public Issue()
        {
            Articles = new List<Article>();
        }

        public int IssueId { get; set; }
        public int PublicationId { get; set; }
        public virtual Publication Publication { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateLastModified { get; set; }
        public DateTime DatePublished { get; set; }

        public ICollection<Article> Articles { get; set; }
    }

    public class Article
    {
        public int ArticleId { get; set; }
        public int? IssueId { get; set; }
        public virtual ArticleTemplate ArticleTemplate { get; set; }
        public int ArticleTemplateId { get; set; }
        public ICollection<ArticleSection> Sections { get; set; }

        public DateTime DateCreated { get; set; }
        public DateTime DateLastModified { get; set; }
        public DateTime DatePublished { get; set; }

        public ArticleState ArticleState { get; set; }
    }

    public enum ArticleState
    {
        New, Submission, InProgress, Edited, Scheduled, Published
    }

    public class ArticleSection
    {
        public int ArticleSectionId { get; set; }
        public int ArticleTemplateSectionId { get; set; }
        public virtual ArticleTemplateSectionDefinition SectionDefinition { get; set; }
        public string Html { get; set; }
        
    }

    public class ArticleTemplate
    {
        public ArticleTemplate()
        {
            SectionDefinitions = new List<ArticleTemplateSectionDefinition>();
        }

        public int ArticleTemplateId { get; set; }
        public string Name { get; set; }

        public ICollection<ArticleTemplateSectionDefinition> SectionDefinitions { get; set; }
    }

    public class ArticleTemplateSectionDefinition
    {
        public int ArticleTemplateSectionDefinitionId { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
    }
}
