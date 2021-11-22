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
using HttpGetAttribute = System.Web.Http.HttpGetAttribute;
using RouteAttribute = System.Web.Http.RouteAttribute;
using RoutePrefixAttribute = System.Web.Http.RoutePrefixAttribute;

namespace examroom_back_app.Controllers
{
    //Srediti ovo: [RoutePrefix("Form")]
    public class CandidateController : ApiController
    {
        //Method that gets all active candidates
        public HttpResponseMessage Get()
        {
            string query = @"SELECT * FROM dbo.Candidate WHERE Active=1";
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

        //Method that gets exact candidate by id 
        [Route("api/Candidate/GetCandidateById/{id}")]
        [HttpGet]
        public HttpResponseMessage GetCandidateById(int id)
        {
            string query = @"SELECT * FROM dbo.Candidate WHERE Id=" + id + @"";

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

        //Method that gets exact candidate by mail
        [Route("api/Candidate/GetCandidateByEMail/{mail}/")]
        [HttpGet]
        public HttpResponseMessage GetCandidateByEMail(string mail)
        {
            string query = @"SELECT * FROM dbo.Candidate WHERE EmailId='" + mail + @"'";
            System.Diagnostics.Debug.WriteLine(query);
            
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