FROM mcr.microsoft.com/dotnet/aspnet:latest AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:latest AS build
WORKDIR /src
COPY ["SiteConstructor.API.csproj", "./"]
RUN dotnet restore "SiteConstructor.API.csproj"

COPY . .
RUN dotnet build "SiteConstructor.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SiteConstructor.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=80
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "API.dll"]