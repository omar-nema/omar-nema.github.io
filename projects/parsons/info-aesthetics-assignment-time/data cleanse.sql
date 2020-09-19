IF OBJECT_ID('tempdb..#parsed') IS NOT NULL
   DROP TABLE #parsed


select 
[Complaint Type] as complaint,  
[incident zip] as zip, Borough
, cast([created date] as date) as [dt]
, cast([created date] as time) as [time]
into #parsed
from dbo.[311text2]
where month(cast([created date] as date)) = 8



select cast('19:00:00' as time)  > cast('17:01:00.0000000' as time)

--morning, early afternoon, 
--5-12, 12-7, 7-5


select 
 
complaint, borough, zip, dt, day(dt), datepart(weekday, dt) as dayOfWeek
,[time]
, case when 
	((time >= cast('19:00:00' as time)) or (time >=  cast('00:00:00' as time) AND time < cast('05:00:00' as time) ))
	then '4- night'
	when 
	(time >= cast('05:00:00' as time) AND time < cast('12:00:00' as time) )
	then '1 - morning' 
	when 
	(time >= cast('12:00:00' as time) AND time < cast('15:00:00' as time) )
	then '2 - early afternoon' 
	else null end as timeCluster
from #parsed




IF OBJECT_ID('tempdb..#complaintsMapped') IS NOT NULL
   DROP TABLE #complaintsMapped

select *, row_number() over (order by cn desc) as rnk, cast(NULL as varchar(max)) as newCategory
into #complaintsMapped
from
(
select  [complaint type], count(1) as cn from dbo.[311text2]
group by [Complaint Type]
) x

order by cn desc

update #complaintsMapped
set newCategory = 'Noise'
where [Complaint Type] like '%noise%' or [Complaint Type] like 'noise%'

update #complaintsMapped
set newCategory = 'Parking'
where [Complaint Type] in('Illegal Parking', 'Blocked Driveway')

update #complaintsMapped
set newCategory = 'Pandemic Compliance'
where [Complaint Type] in('NonCompliance with Phased Reopening')

update #complaintsMapped
set newCategory = 'Public Prop. Condition'
where [Complaint Type] in( 'Street Light Condition', 'Sidewalk Condition', 'Street Condition')

update #complaintsMapped
set newCategory = 'Trash Collection'
where [Complaint Type] in( 'Missed Collection (All Materials)')

update #complaintsMapped
set newCategory = 'Sanitation'
where [Complaint Type] in( 'UNSANITARY CONDITION', 'Dirty Conditions')

update #complaintsMapped
set newCategory = [Complaint Type] 
where rnk < 17
and newCategory is null



select 
case when newCategory is not null then newCategory 
else 'Miscellaneous' end as mappedCategory, *
from dbo.[311text2] orig
into #another
left join #complaintsMapped cm
on orig.[Complaint Type] = cm.[Complaint Type]
