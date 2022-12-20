import React from "react";

import {EscolaContext} from '../../contexts/escola';
import { useState, useId, useContext } from 'react';
import api from '../../service/api.js';
import {toast} from 'react-toastify';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { FaSearch} from 'react-icons/fa';
import Call from '../../img/call-center.jpg'

  


export default function Contato(){
 
    return(
      <div>
            <div>
              <img src={Call} className=' w-full justify-center  h-36  backdrop-opacity-90'/> 
            </div>
            <div>

            </div>
      </div>

    )
} 