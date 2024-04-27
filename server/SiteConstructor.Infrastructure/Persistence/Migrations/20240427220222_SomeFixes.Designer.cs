﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using SiteConstructor.Infrastructure.Persistence;

#nullable disable

namespace server.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20240427220222_SomeFixes")]
    partial class SomeFixes
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0-preview.2.24128.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("SiteConstructor.Domain.Entities.BlockEntity", b =>
                {
                    b.Property<long>("BlockId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("BlockId"));

                    b.Property<int>("BlockNum")
                        .HasColumnType("integer");

                    b.Property<string>("JSONB")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long>("PageId")
                        .HasColumnType("bigint");

                    b.HasKey("BlockId");

                    b.HasIndex("PageId");

                    b.ToTable("Blocks");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.PageEntity", b =>
                {
                    b.Property<long>("PageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("PageId"));

                    b.Property<int>("PageNum")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("integer");

                    b.Property<long>("SiteId")
                        .HasColumnType("bigint");

                    b.HasKey("PageId");

                    b.HasIndex("SiteId");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.SiteEntity", b =>
                {
                    b.Property<long>("UserId")
                        .HasColumnType("bigint");

                    b.HasKey("UserId");

                    b.ToTable("Sites");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.UserEntity", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("OrgName")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.BlockEntity", b =>
                {
                    b.HasOne("SiteConstructor.Domain.Entities.PageEntity", "Page")
                        .WithMany("Blocks")
                        .HasForeignKey("PageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Page");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.PageEntity", b =>
                {
                    b.HasOne("SiteConstructor.Domain.Entities.SiteEntity", "Site")
                        .WithMany("Pages")
                        .HasForeignKey("SiteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Site");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.SiteEntity", b =>
                {
                    b.HasOne("SiteConstructor.Domain.Entities.UserEntity", "User")
                        .WithOne("Site")
                        .HasForeignKey("SiteConstructor.Domain.Entities.SiteEntity", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.PageEntity", b =>
                {
                    b.Navigation("Blocks");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.SiteEntity", b =>
                {
                    b.Navigation("Pages");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.UserEntity", b =>
                {
                    b.Navigation("Site");
                });
#pragma warning restore 612, 618
        }
    }
}
