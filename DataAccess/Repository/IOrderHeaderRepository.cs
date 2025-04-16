﻿using Models;
using MyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repository
{
    public interface IOrderHeaderRepository :IRepository<OrderHeader>
    {
      
        void Update(OrderHeader entity);
    }
}
