import { createRouter, createWebHistory } from "vue-router";

// Manager
import Dashboardmanager from "@/pages/Manager/Dashboardmanager.vue";
import Pengajuanbaru from "@/pages/Manager/Approval/Pengajuanbaru.vue";
import Disetujui from "@/pages/Manager/Approval/Disetujui.vue";
import Ditolak from "@/pages/Manager/Approval/Ditolak.vue";
import Prosesmanager from "@/pages/Manager/Prosesmanager.vue";
import Selesaimanager from "@/pages/Manager/Selesaimanager.vue";
import Detailmanager from "@/pages/Manager/Detailmanager.vue";

// User
import Dashboard from "@/pages/Dashboard.vue";
import Proses from "../pages/Proses.vue";
import Selesai from "../pages/Selesai.vue";
import Detailpengajuan from "../pages/Detailpengajuan.vue";

import MoU from '../pages/MoU/Mou.vue'
import PKS from '../pages/PKS/Pks.vue'
import Ruanglingkup from '../pages/MoU/Ruanglingkup.vue'
import Lainnya from '../pages/MoU/Lainnya.vue'
import Mitrabisnis from '../pages/MoU/Mitrabisnis.vue'
import Lampiran from '../pages/MoU/Lampiran.vue'
import Rab from '../pages/PKS/Rab&boq.vue'
import Pksruanglingkup from '../pages/PKS/Pksruanglingkup.vue'
import Pkslainnya from '../pages/PKS/Pkslainnya.vue'
import Pksmitrabisnis from '../pages/PKS/Pksmitrabisnis.vue'
import Pkslampiran from '../pages/PKS/Pkslampiran.vue';
import Draft from "../pages/Draft.vue";


const routes = [
    
    // Manager
    { path: '/Dashboardmanager', name: 'Dashboardmanager', component: Dashboardmanager },
    { path: '/Pengajuanbaru', name: 'Pengajuanbaru', component: Pengajuanbaru },
    { path: '/Disetujui', name: 'Disetujui', component: Disetujui },
    { path: '/Ditolak', name: 'Ditolak', component: Ditolak },
    { path: '/Prosesmanager', name: 'Prosesmanager', component: Prosesmanager },
    { path: '/Selesaimanager', name: 'Selesaimanager', component: Selesaimanager },
    { path: '/Detailpengajuanmanager', name: 'Detailmanager', component: Detailmanager},

    // User
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/Proses', name: 'Proses', component: Proses },
    { path: '/Selesai', name: 'Selesai', component: Selesai },
    { path: '/Detailpengajuan', name: 'Detailpengajuan', component: Detailpengajuan },



    { path: '/MoU', name: 'MoU', component: MoU },
    { path: '/PKS', name: 'PKS', component: PKS },
    { path: '/Ruanglingkup', name: 'Ruanglingkup', component: Ruanglingkup },
    { path: '/Lainnya', name: 'Lainnya', component: Lainnya },
    { path: '/Mitrabisnis', name: 'Mitrabisnis', component: Mitrabisnis },
    { path: '/Lampiran', name: 'Lampiran', component: Lampiran },
    { path: '/Rab', name: 'Rab', component: Rab },
    { path: '/Pksruanglingkup', name: 'Pksruanglingkup', component: Pksruanglingkup },
    { path: '/Pkslainnya', name: 'Pkslainnya', component: Pkslainnya },
    { path: '/Pksmitrabisnis', name: 'Pksmitrabisnis', component: Pksmitrabisnis },
    { path: '/Pkslampiran', name: 'Pkslampiran', component: Pkslampiran },
    { path: '/Draft', name: 'Draft', component: Draft },
    
    

  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
