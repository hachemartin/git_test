#1. Cantidad de registros de la tabla flights
use usairlineflights
select count(*) from flights;

#2.1 Retraso medio de salida de aeropuertos de origen
select Origin, AVG(DepDelay) from flights
group by Origin;

#2.2 Retraso medio de llegada de aeropuertos de origen
select Origin, AVG(ArrDelay) from flights
group by Origin;

#3. Retraso medio de llegada de vuelos por Meses y según Origen.
#Con orden Year, Month 
select Origin, Year, Month, AVG(ArrDelay) as 'retraso' from flights
group by Year, Month;

#4. Retraso medio de llegada de vuelos por Meses y según Origen.
#Pero sustituyendo el código del aeropuerto por la ciudad.
select city, Year, Month, AVG(ArrDelay) as 'retraso' from flights,airports
where iata=Origin
group by Year, Month;

#IGUAL usando INNER JOIN
select city, Year, Month, AVG(ArrDelay) as 'retraso' from flights
inner join airports
on iata=Origin
group by Year, Month;

#5. Compañías con más vuelos cancelados.
#Ordenadas la de mayor vuelos cancelados primero

select UniqueCarrier, sum(Cancelled) as 'resultado' from flights
group by UniqueCarrier
order by resultado DESC;

#OR

select Description, sum(Cancelled) as 'resultado' from flights
inner join carriers
on code=UniqueCarrier
group by UniqueCarrier
order by resultado DESC;


#6. El ID de los aviones que más distancia han recorrido haciendo vuelos

Select FlightNum, Distance from flights
group by FlightNum
order by Distance DESC
limit 10; 

#Igual pero con compañía

Select Description, FlightNum, Distance from flights
inner join carriers
on code=UniqueCarrier
group by FlightNum
order by Distance DESC
limit 10; 


#7. Compañías con su retraso promedio,
#sólo las que sus vuelos lleguen a su destino con un retraso promedio mayor a 10 minutos

select UniqueCarrier, avg(DepDelay) as 'promedio' from flights
group by UniqueCarrier
having avg(DepDelay) > 10
order by promedio ASC;

#OR

select Description, avg(DepDelay) as 'promedio' from flights
inner join carriers
on Code=UniqueCarrier
group by UniqueCarrier
having avg(DepDelay) > 10
order by promedio ASC;

#OR

select Description, avg(DepDelay) as 'promedio' from flights, carriers
where Code=UniqueCarrier
group by UniqueCarrier
having avg(DepDelay) > 10
order by promedio ASC;
