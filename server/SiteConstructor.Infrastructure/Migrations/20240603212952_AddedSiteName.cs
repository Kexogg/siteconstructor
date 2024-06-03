using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteConstructor.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddedSiteName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SiteName",
                table: "Sites",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<string>(
                name: "siteAddress",
                table: "Sites",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "siteAddress",
                table: "Sites");

            migrationBuilder.AlterColumn<string>(
                name: "SiteName",
                table: "Sites",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);
        }
    }
}
