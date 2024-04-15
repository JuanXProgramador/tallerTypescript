import {Serie} from './serie.js';
import {series} from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let tarjetaTable: HTMLElement = document.getElementById("cartaseries")!;

mostrarSeries(series);

function mostrarSeries(series:Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");

    for(let serie of series)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td>
        <td><span class="serie-link" data-toggle="modal" data-target="#serieModal${serie.id}">${serie.name}</span></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        let serieNameElement: HTMLElement = trElement.querySelector('.serie-link') as HTMLElement;
        serieNameElement.addEventListener('click', () => {
            mostrarTarjeta(serie);
        });
        seriesTbody.appendChild(trElement);
    }
    let seasonsAverageCell: HTMLElement = document.getElementById("seasonsAverage")!;
    seasonsAverageCell.textContent = `Seasons average: ${promedioSeasons(series)}`;

    seriesTable.appendChild(seriesTbody);
    /*
    let serieLinks: NodeListOf<Element> = document.querySelectorAll(".serie-link");
    serieLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            let serieId = parseInt((event.target as HTMLElement).getAttribute("data-id")!);
            mostrarTarjeta(series[1]);
        });
    });*/
}

function mostrarTarjeta(serie:Serie):void{
            tarjetaTable.removeChild(tarjetaTable.lastChild!);
            let trElement:HTMLElement = document.createElement("tr");
            trElement.innerHTML = `<div class="card">
            <div class="card-body text-center py-4">
            <img src=${serie.image} class="img-fluid" alt="Responsive image">
            <h4 class="card-title">${serie.name}</h4>
            <p class="card-text">${serie.synopsis}</p>
            <a href=${serie.link}>${serie.link}</a>
            </div></div>`;
            tarjetaTable.appendChild(trElement);
}

function promedioSeasons(series:Serie[]): number{
    let promedio:number = 0;
    let n:number = 0;
    for(let serie of series){
        promedio += serie.seasons;
        n++;
    }
    return promedio/n;
}