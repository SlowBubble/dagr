(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();const d=[{year:2021,month:1,price:1}];for(let e=2;e<37;e++)d.push({year:2021,month:e,price:Math.pow(1.01,e-1)});const s=[{year:2021,month:1,price:28994.01},{year:2021,month:2,price:33114.58},{year:2021,month:3,price:45159.5},{year:2021,month:4,price:58926.56},{year:2021,month:5,price:57714.66},{year:2021,month:6,price:37293.79},{year:2021,month:7,price:35035.98},{year:2021,month:8,price:41460.84},{year:2021,month:9,price:47099.77},{year:2021,month:10,price:43816.74},{year:2021,month:11,price:61320.45},{year:2021,month:12,price:56907.97},{year:2022,month:1,price:47206.64},{year:2022,month:2,price:38713.77},{year:2022,month:3,price:44295.37},{year:2022,month:4,price:45537.68},{year:2022,month:5,price:37774.25},{year:2022,month:6,price:31792.22},{year:2022,month:7,price:19845.16},{year:2022,month:8,price:23136.58},{year:2022,month:9,price:20146.54},{year:2022,month:10,price:19431.33},{year:2022,month:11,price:20504.27},{year:2022,month:12,price:17190.79},{year:2023,month:1,price:16530},{year:2023,month:2,price:23713.74},{year:2023,month:3,price:23631.71},{year:2023,month:4,price:28478.11},{year:2023,month:5,price:29230.43},{year:2023,month:6,price:27095.56},{year:2023,month:7,price:30624.16},{year:2023,month:8,price:29200.14},{year:2023,month:9,price:25862.32},{year:2023,month:10,price:27240.44},{year:2023,month:11,price:34614.47},{year:2023,month:12,price:37790.14},{year:2024,month:1,price:44711},{year:2024,month:2,price:42950},{year:2024,month:3,price:61408},{year:2024,month:4,price:70626},{year:2024,month:5,price:64100},{year:2024,month:6,price:99e3},{year:2024,month:7,price:101350},{year:2024,month:8,price:107e3},{year:2024,month:9,price:110600},{year:2024,month:10,price:113200},{year:2024,month:11,price:115500},{year:2024,month:12,price:118200},{year:2025,month:1,price:117e3},{year:2025,month:2,price:119100},{year:2025,month:3,price:119200},{year:2025,month:4,price:120700},{year:2025,month:5,price:118800},{year:2025,month:6,price:119e3},{year:2025,month:7,price:119e3}],l=[{year:2021,month:1,price:12888.28},{year:2021,month:2,price:13349.16},{year:2021,month:3,price:13192.35},{year:2021,month:4,price:13372.62},{year:2021,month:5,price:13776.48},{year:2021,month:6,price:13627.45},{year:2021,month:7,price:14635.59},{year:2021,month:8,price:15070.1},{year:2021,month:9,price:15424.42},{year:2021,month:10,price:14718.69},{year:2021,month:11,price:15842.99},{year:2021,month:12,price:16223.65},{year:2022,month:1,price:16429.15},{year:2022,month:2,price:14594.56},{year:2022,month:3,price:14205.43},{year:2022,month:4,price:15155.37},{year:2022,month:5,price:13429.68},{year:2022,month:6,price:12582.87},{year:2022,month:7,price:11458.73},{year:2022,month:8,price:12941.99},{year:2022,month:9,price:12950.78},{year:2022,month:10,price:11504.28},{year:2022,month:11,price:11075.18},{year:2022,month:12,price:11593.29},{year:2023,month:1,price:10862.53},{year:2023,month:2,price:12397.21},{year:2023,month:3,price:12168.6},{year:2023,month:4,price:13252.56},{year:2023,month:5,price:13235.51},{year:2023,month:6,price:14659.43},{year:2023,month:7,price:15197.54},{year:2023,month:8,price:15836.68},{year:2023,month:9,price:15511.06},{year:2023,month:10,price:14547.57},{year:2023,month:11,price:14915.42},{year:2023,month:12,price:15972.41},{year:2024,month:1,price:16733.1},{year:2024,month:2,price:17836.09},{year:2024,month:3,price:18181.23},{year:2024,month:4,price:18478.49},{year:2024,month:5,price:18388.25},{year:2024,month:6,price:19192.3},{year:2024,month:7,price:20026},{year:2024,month:8,price:20500},{year:2024,month:9,price:21200},{year:2024,month:10,price:21700},{year:2024,month:11,price:22050},{year:2024,month:12,price:22440},{year:2025,month:1,price:22600},{year:2025,month:2,price:22800},{year:2025,month:3,price:22870},{year:2025,month:4,price:22950},{year:2025,month:5,price:22720},{year:2025,month:6,price:22640},{year:2025,month:7,price:22478.14}],u=[{year:2021,month:1,price:13.07},{year:2021,month:2,price:13.79},{year:2021,month:3,price:13.32},{year:2021,month:4,price:14.05},{year:2021,month:5,price:17.61},{year:2021,month:6,price:17.19},{year:2021,month:7,price:17.93},{year:2021,month:8,price:21.62},{year:2021,month:9,price:22.03},{year:2021,month:10,price:20.21},{year:2021,month:11,price:24.57},{year:2021,month:12,price:30.7},{year:2022,month:1,price:30.07},{year:2022,month:2,price:26.72},{year:2022,month:3,price:25.8},{year:2022,month:4,price:27.92},{year:2022,month:5,price:19.35},{year:2022,month:6,price:18.97},{year:2022,month:7,price:15.53},{year:2022,month:8,price:18.54},{year:2022,month:9,price:18.7},{year:2022,month:10,price:12.48},{year:2022,month:11,price:14.39},{year:2022,month:12,price:17.22},{year:2023,month:1,price:14.3},{year:2023,month:2,price:19.29},{year:2023,month:3,price:22.77},{year:2023,month:4,price:27.37},{year:2023,month:5,price:27.37},{year:2023,month:6,price:39.11},{year:2023,month:7,price:40.49},{year:2023,month:8,price:48.74},{year:2023,month:9,price:48.02},{year:2023,month:10,price:44.08},{year:2023,month:11,price:39.18},{year:2023,month:12,price:47.65},{year:2024,month:1,price:48.15},{year:2024,month:2,price:59.59},{year:2024,month:3,price:82.06},{year:2024,month:4,price:89.5},{year:2024,month:5,price:100.17},{year:2024,month:6,price:122.07},{year:2024,month:7,price:136.87},{year:2025,month:1,price:138.29},{year:2025,month:2,price:145.67},{year:2025,month:3,price:152.53},{year:2025,month:4,price:157.26},{year:2025,month:5,price:162.31},{year:2025,month:6,price:167.29},{year:2025,month:7,price:171.91}];function f(e,o=1){let n=0;const t=e.length;for(let i=0;i<t;i++)n+=1/e[i].price;const r=n*e[t-1].price,c=t*o,a=r/c,h=e[0],m=e[t-1],y=m.year-h.year+(m.month-h.month)/12;return Math.pow(a,1/y)-1}function g(e){const o=e[0],n=e[e.length-1],t=n.year-o.year+(n.month-o.month)/12;return Math.pow(n.price/o.price,1/t)-1}function x(e){const o=e[0],n=e[e.length-1],t=(n.year-o.year)*12+(n.month-o.month);return t===0?0:Math.pow(n.price/o.price,1/t)-1}function C(e,o=1){let n=0;const t=e.length;for(let i=0;i<t;i++)n+=1/e[i].price;const r=n*e[t-1].price,c=t*o,a=r/c,h=e[0],m=e[t-1],y=(m.year-h.year)*12+(m.month-h.month);return y===0?0:Math.pow(a,1/y)-1}function $(e){const o=g(d),n=g(s),t=g(l),r=g(u),c=f(d,e),a=f(s,e),h=f(l,e),m=f(u,e),y=x(d),i=x(s),w=x(l),N=x(u),v=C(d,e),T=C(s,e),b=C(l,e),M=C(u,e);document.querySelector("#app").innerHTML=`
    <div style="margin-bottom:16px;">
      <label for="costBasisRatioText">DCA Cost Basis Ratio:</label>
      <input type="text" id="costBasisRatioText" value="${e}" style="width:60px; margin-left:8px;">
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
          <td>${(o*100).toFixed(2)}%</td>
          <td>${(y*100).toFixed(2)}%</td>
          <td>${(c*100).toFixed(2)}%</td>
          <td>${(v*100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Nasdaq</td>
          <td>${(t*100).toFixed(2)}%</td>
          <td>${(w*100).toFixed(2)}%</td>
          <td>${(h*100).toFixed(2)}%</td>
          <td>${(b*100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>BTC</td>
          <td>${(n*100).toFixed(2)}%</td>
          <td>${(i*100).toFixed(2)}%</td>
          <td>${(a*100).toFixed(2)}%</td>
          <td>${(T*100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Nvidia</td>
          <td>${(r*100).toFixed(2)}%</td>
          <td>${(N*100).toFixed(2)}%</td>
          <td>${(m*100).toFixed(2)}%</td>
          <td>${(M*100).toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
  `;const F=document.getElementById("costBasisRatioText");F&&F.addEventListener("keydown",q=>{if(q.key==="Enter"){let p=parseFloat(F.value);isNaN(p)&&(p=1),p<.1&&(p=.1),p>1&&(p=1),$(p)}})}$(1);
