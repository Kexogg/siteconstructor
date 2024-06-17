using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteConstructor.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class HasImagesField : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "HasImages",
                table: "Blocks",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HasImages",
                table: "Blocks");
        }
    }
}
