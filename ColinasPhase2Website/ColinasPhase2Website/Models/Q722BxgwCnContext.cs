using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ColinasPhase2Website.Models
{
    public partial class Q722BxgwCnContext : DbContext
    {
        public Q722BxgwCnContext()
        {
        }

        public Q722BxgwCnContext(DbContextOptions<Q722BxgwCnContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ResidencyStatus> ResidencyStatus { get; set; }
        public virtual DbSet<Residents> Residents { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=remotemysql.com;database=Q722BxgwCn;user=Q722BxgwCn;password=cs7VjyE9MN;treattinyasboolean=true", x => x.ServerVersion("8.0.13-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ResidencyStatus>(entity =>
            {
                entity.HasKey(e => e.StatusId)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.Status)
                    .HasName("idx_status");

                entity.Property(e => e.StatusId)
                    .HasColumnName("StatusID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Status)
                    .HasColumnName("ResidencyStatus")
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_unicode_ci");
            });

            modelBuilder.Entity<Residents>(entity =>
            {
                entity.HasKey(e => e.ResidentId)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.ResidentId)
                    .HasName("ResidentID_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.ResidentStatus)
                    .HasName("idx_status");

                entity.Property(e => e.ResidentId)
                    .HasColumnName("ResidentID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.BlockLot)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Email)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FirstName)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LastName)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Nickname)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Phase)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhoneNumber)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ResidentStatus)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.StreetName)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        #region Residents
        public virtual IEnumerable<Residents> GetAllResidents()
        {
            return Residents.ToArray();
        }
        #endregion

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
