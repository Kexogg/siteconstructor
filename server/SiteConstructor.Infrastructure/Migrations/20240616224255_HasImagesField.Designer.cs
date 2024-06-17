﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using SiteConstructor.Infrastructure.Persistence;

#nullable disable

namespace SiteConstructor.Infrastructure.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20240616224255_HasImagesField")]
    partial class HasImagesField
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
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<bool>("HasImages")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("Jsonb")
                        .HasColumnType("jsonb");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Num")
                        .HasColumnType("integer");

                    b.Property<long>("PageId")
                        .HasColumnType("bigint");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("PageId");

                    b.ToTable("Blocks");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.PageEntity", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("IsEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Num")
                        .HasColumnType("integer");

                    b.Property<long>("SiteId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("SiteId");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("SiteConstructor.Domain.Entities.SiteEntity", b =>
                {
                    b.Property<long>("Id")
                        .HasColumnType("bigint");

                    b.Property<string>("SiteAddress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SiteName")
                        .HasColumnType("text");

                    b.Property<string>("Styles")
                        .HasColumnType("jsonb");

                    b.HasKey("Id");

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
                        .HasForeignKey("SiteConstructor.Domain.Entities.SiteEntity", "Id")
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
