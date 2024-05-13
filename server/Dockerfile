FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["SiteConstructor.API/SiteConstructor.API.csproj", "SiteConstructor.API/"]
RUN dotnet restore "SiteConstructor.API/SiteConstructor.API.csproj"

COPY . .
WORKDIR "/src/SiteConstructor.API"
RUN dotnet build "SiteConstructor.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SiteConstructor.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=80
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SiteConstructor.API.dll"]
