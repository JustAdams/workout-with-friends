using Microsoft.EntityFrameworkCore;
using WorkoutWithFriends.API.Data;
using WorkoutWithFriends.API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Using program memory for now, will reset every time you restart the project
// TODO: Switching to Sqlite in the future when hosting on Azure
builder.Services.AddDbContext<ExerciseContext>(opt => opt.UseInMemoryDatabase("ExerciseList"));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddTransient<ExerciseSeeder>();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
