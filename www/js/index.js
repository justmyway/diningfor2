/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var venues = [];

function startApp(){
    getVenues(showVenues);
}

function getVenues(callback){
    $.ajax( "https://api.eet.nu/venues" )
        .done(function(data) {
            venues = data.results || [];
            callback();
        })
        .fail(function() {
            callback('Geen internet verbinding');
        });
}

function showVenues(err){
    if(err){
        alert(err);
    }else{
        var obj = document.createElement('ul');
        var html = '';
        for(var c=0; c< 20 ; c++){
            html += '<li>'+venues[c].name+'</li>';
        }
        obj.innerHTML = html;
        obj.setAttribute('data-role', 'listview');
        document.getElementById('venuList').appendChild(obj);
        //$(obj).viewList();
    }
}
//document.addEventListener('deviceready', startApp);
$(document).ready(startApp);