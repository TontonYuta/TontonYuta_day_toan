using DayToanApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DayToanApi;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Session> Sessions => Set<Session>();
    public DbSet<Example> Examples => Set<Example>();
    public DbSet<Question> Questions => Set<Question>();
    public DbSet<MultipleChoiceQuestion> MultipleChoiceQuestions => Set<MultipleChoiceQuestion>();
    public DbSet<EssayQuestion> EssayQuestions => Set<EssayQuestion>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Question dùng TPH (Table Per Hierarchy)
        modelBuilder.Entity<Question>()
            .HasDiscriminator<string>("QuestionType")
            .HasValue<MultipleChoiceQuestion>("MCQ")
            .HasValue<EssayQuestion>("Essay");

        // Primary key cho Session là Id (string)
        modelBuilder.Entity<Session>()
            .HasKey(s => s.Id);

        base.OnModelCreating(modelBuilder);
    }
}
