import './style.css'
import { testPrices } from './data/testPrices'
import { btcPrices } from './data/btcPrices'
import { nasdaqPrices } from './data/nasdaqPrices'
import { nvidiaPrices } from './data/nvidiaPrices'
import { computeCAGR, computeDcaCAGR, computeCMGR, computeDcaCMGR } from './growth'

function renderTable(costBasisRatio: number) {
  const cagrTest = computeCAGR(testPrices)
  const cagrBTC = computeCAGR(btcPrices)
  const cagrNasdaq = computeCAGR(nasdaqPrices)
  const cagrNvidia = computeCAGR(nvidiaPrices)

  const dcaCagrTest = computeDcaCAGR(testPrices, costBasisRatio)
  const dcaCagrBTC = computeDcaCAGR(btcPrices, costBasisRatio)
  const dcaCagrNasdaq = computeDcaCAGR(nasdaqPrices, costBasisRatio)
  const dcaCagrNvidia = computeDcaCAGR(nvidiaPrices, costBasisRatio)

  const cmgrTest = computeCMGR(testPrices)
  const cmgrBTC = computeCMGR(btcPrices)
  const cmgrNasdaq = computeCMGR(nasdaqPrices)
  const cmgrNvidia = computeCMGR(nvidiaPrices)

  const dcaCmgrTest = computeDcaCMGR(testPrices, costBasisRatio)
  const dcaCmgrBTC = computeDcaCMGR(btcPrices, costBasisRatio)
  const dcaCmgrNasdaq = computeDcaCMGR(nasdaqPrices, costBasisRatio)
  const dcaCmgrNvidia = computeDcaCMGR(nvidiaPrices, costBasisRatio)

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div style="margin-bottom:16px;">
      <label for="costBasisRatioText">DCA Cost Basis Ratio:</label>
      <input type="text" id="costBasisRatioText" value="${costBasisRatio}" style="width:60px; margin-left:8px;">
    </div>
    <table>
      <thead>
        <tr>
          <th>2021-2025</th>
          <th>Annual growth</th>
          <th>Monthly growth</th>
          <th>DCA annual growth</th>
          <th>DCA monthly growth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Stable growth</td>
          <td>${(cagrTest * 100).toFixed(2)}%</td>
          <td>${(cmgrTest * 100).toFixed(2)}%</td>
          <td>${(dcaCagrTest * 100).toFixed(2)}%</td>
          <td>${(dcaCmgrTest * 100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Nasdaq</td>
          <td>${(cagrNasdaq * 100).toFixed(2)}%</td>
          <td>${(cmgrNasdaq * 100).toFixed(2)}%</td>
          <td>${(dcaCagrNasdaq * 100).toFixed(2)}%</td>
          <td>${(dcaCmgrNasdaq * 100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>BTC</td>
          <td>${(cagrBTC * 100).toFixed(2)}%</td>
          <td>${(cmgrBTC * 100).toFixed(2)}%</td>
          <td>${(dcaCagrBTC * 100).toFixed(2)}%</td>
          <td>${(dcaCmgrBTC * 100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Nvidia</td>
          <td>${(cagrNvidia * 100).toFixed(2)}%</td>
          <td>${(cmgrNvidia * 100).toFixed(2)}%</td>
          <td>${(dcaCagrNvidia * 100).toFixed(2)}%</td>
          <td>${(dcaCmgrNvidia * 100).toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
  `;

  const textInput = document.getElementById('costBasisRatioText') as HTMLInputElement | null;
  if (textInput) {
    textInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        let value = parseFloat(textInput.value);
        if (isNaN(value)) value = 1;
        if (value < 0.1) value = 0.1;
        if (value > 1) value = 1;
        renderTable(value);
      }
    });
  }
}

// Initial render with default value 1
renderTable(1);

