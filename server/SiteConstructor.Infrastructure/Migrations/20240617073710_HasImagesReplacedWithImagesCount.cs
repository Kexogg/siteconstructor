using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteConstructor.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class HasImagesReplacedWithImagesCount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HasImages",
                table: "Blocks");

            migrationBuilder.AddColumn<int>(
                name: "ImagesCount",
                table: "Blocks",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagesCount",
                table: "Blocks");

            migrationBuilder.AddColumn<bool>(
                name: "HasImages",
                table: "Blocks",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
