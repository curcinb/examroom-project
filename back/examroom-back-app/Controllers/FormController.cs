﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using HttpGetAttribute = System.Web.Http.HttpGetAttribute;
using RouteAttribute = System.Web.Http.RouteAttribute;

namespace examroom_back_app.Controllers
{
    public class FormController : ApiController
    {
        //Method that gets all active forms
        public HttpResponseMessage Get()
        {
            string query = @"SELECT * FROM dbo.Form WHERE Active=1";
            DataTable table = new DataTable();

            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["FormAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        //Method that gets all submitted forms 
        [Route("api/Form/GetAllSubmittedForms")]
        [HttpGet]
        public HttpResponseMessage GetAllSubmittedForms ()
        {

            string query = @"SELECT * FROM dbo.SubmittedForm";
            DataTable table = new DataTable();

            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["FormAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        
        //Method that gets all submitted forms 
        [Route("api/Form/GetAllFormActions/form/{id}/candidate/{candidateId}")]
        [HttpGet]
        public HttpResponseMessage GetAllFormActions(int id, int candidateId)
        {

            string query = @"SELECT * FROM dbo.FormAction WHERE FormId=" + id + @" AND CandidateId=" + candidateId + @"";
            DataTable table = new DataTable();

            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["FormAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        //Metod that deletes the exact form
        public string Delete(int id)
        {
            try
            {
                string query = @"
                    DELETE FROM dbo.Form 
                    WHERE Id=" + id + @"";

                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["FormAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!!";
            }
            catch (Exception)
            {
                return "Failed to Delete!!";
            }
        }
    }
}