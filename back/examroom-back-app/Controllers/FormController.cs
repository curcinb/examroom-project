using System;
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
using HttpDeleteAttribute = System.Web.Http.HttpDeleteAttribute;
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

        //Method that calculates total waiting time of the form actions
        [Route("api/Form/CalculateTotalWaitingTime/form/{id}/candidate/{candidateId}")]
        [HttpGet]
        public HttpResponseMessage CalculateTotalWaitingTime(int id, int candidateId)
        {
            string query = @"declare @StartDate datetime, @EndDate datetime;
                             select @StartDate = Min(ActionOn) 
                             FROM dbo.FormAction WHERE FormId=" + id 
                             + @" AND CandidateId=" + candidateId + @"
                             select @EndDate = Max(ActionOn) 
                             FROM dbo.FormAction WHERE FormId=" + id
                             + @" AND CandidateId=" + candidateId + @"
                             select convert(varchar(5),DateDiff(s, @startDate, @EndDate)/3600)+':'
                                   +convert(varchar(5),DateDiff(s, @startDate, @EndDate)%3600/60)+':'
                                   +convert(varchar(5),(DateDiff(s, @startDate, @EndDate)%60)) as [hh:mm:ss]";
            
            //System.Diagnostics.Debug.WriteLine(query);

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

        //Method that deletes the exact submitted form
        [Route("api/Form/DeleteSubmittedForm/{id}")]
        [HttpDelete]
        public HttpResponseMessage DeleteSubmittedForm(int id)
        {
            string query = @"
                    DELETE FROM dbo.SubmittedForm 
                    WHERE IdForm=" + id + @"";

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

        //Method that deletes the submitted form actions
        [Route("api/Form/deleteSubmittedFormActions/form/{id}/candidate/{candidateId}")]
        [HttpDelete]
        public HttpResponseMessage DeleteSubmittedFormActions(int id, int candidateId)
        {
            string query = @"
                    DELETE FROM dbo.FormAction 
                    WHERE FormId=" + id + @" AND CandidateId=" + candidateId + @"";

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
    }
}