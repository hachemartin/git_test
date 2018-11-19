## 1. Cantidad de registros de la tabla flights

select count(*) from usairlineflights.Flights;


## 2. Retraso medio de salida de aeropuertos de origen

select usairlineflights.Flights.Origin,
	avg(Flights.DepDelay) as delay_average,
    avg(Flights.ArrDelay) as arrival_average 
from Flights
group by Origin;



## 3. Retraso medio de llegada de vuelos por Meses y según Origen.
#Con orden Year, Month 
#CORREGIR: "3 sigue faltando el los 3 campos en el order by."

select Origin, Year, Month, DayOfMonth, avg(ArrDelay) 
from usairlineflights.Flights 
group by Origin, Year, Month, DayOfMonth
order by Origin;


## 4. Retraso medio de llegada de vuelos por Meses y según Origen.
#Pero sustituyendo el código del aeropuerto por la ciudad.
#CORREGIR: "4 Podrías mejorar el resultado escogiendo una JOIN más idonea en vez de INNER :guiño: Sigo sin ver el order by"

select City, Year, Month, 
	avg(ArrDelay) as AverageArrivalDelay 
from usairlineflights.Flights 
inner join usairlineflights.airports on IATA = Origin
group by Origin, Year, Month;


## 5. Compañías con más vuelos cancelados. Ordenadas la de mayor vuelos cancelados primero

select Carriers.Description as Company, count(*) as Canceled 
from usairlineflights.Carriers
left join usairlineflights.Flights on usairlineflights.carriers.Code = usairlineflights.Flights.UniqueCarrier
where Flights.Cancelled = 1
group by Carriers.Code, Flights.Cancelled 
order by Flights.Cancelled asc;


## 6. El ID de los aviones que más distancia han recorrido haciendo vuelos
#CORREGIR: "6 Deberías comprobar que TailNum no es “NA”, el cual indica que no tenemos ese dato."

select TailNum, sum(Distance) as Total
from usairlineflights.Flights
group by TailNum
order by total desc
limit 10;


## 7. Compañías con su retraso promedio: sólo las que sus vuelos lleguen a su destino con un retraso promedio mayor a 10 minutos

select Flights.UniqueCarrier as Company, avg(Flights.ArrDelay) as Delay
from usairlineflights.Flights
group by Flights.UniqueCarrier
having avg(Flights.ArrDelay) > 10;
