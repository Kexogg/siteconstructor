using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteConstructor.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Fix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "siteAddress",
                table: "Sites",
                newName: "SiteAddress");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SiteAddress",
                table: "Sites",
                newName: "siteAddress");
        }
    }
}
