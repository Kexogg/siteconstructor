using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteConstructor.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ReplacedPageNumWithName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PageNum",
                table: "Pages");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Pages",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Pages");

            migrationBuilder.AddColumn<int>(
                name: "PageNum",
                table: "Pages",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
