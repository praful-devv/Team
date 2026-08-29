import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../apis/employeesApi";
import { useNavigate } from "react-router-dom";

 const useEmployee = () => {
   const [PageNumber, setPageNUmber] = useState(1);
   const [filter, setfilter] = useState({
     search: "",
     role: "",
     department: "",
     status: "",
   });

   let navigate = useNavigate();

   let { data, isPending } = useQuery({
     queryKey: ["AllEmployees", PageNumber, filter],
     queryFn: () =>
       getAllEmployees({
         PageNumber,
         role: filter.role,
         search: filter.search,
         department: filter.department,
         status: filter.status,
       }),
     staleTime: 1000000,
     keepPreviousData:true
     // placeholderData: (previousData) => previousData,
   });

   let totalPages = data?.pagination.totalPages;

   let ButtonPrev = () => {
     data && PageNumber > 1 ? setPageNUmber((prev) => prev - 1) : "";
   };
   let ButtonNext = () => {
     data && PageNumber < totalPages ? setPageNUmber((prev) => prev + 1) : "";
   };

   function Searchfilter(name, value) {
     setfilter((prev) => ({ ...prev, [name]: value }));
   }

   useEffect(() => {
     console.log(filter);
   }, [filter]);

   return {
     data,
     isPending,
     PageNumber,
     ButtonPrev,
     ButtonNext,
     navigate,
     filter,
     Searchfilter,
   };
 };

export default useEmployee;
