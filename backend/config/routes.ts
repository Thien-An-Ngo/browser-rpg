import { PlayerController } from '../api/controllers/PlayerController';
// import { ThreatController } from '../api/controllers/ThreatController';

export default {
  'POST /player': PlayerController.create,
  'GET /players': PlayerController.find,
  // 'POST /threat': ThreatController.create,
  // 'GET /threats': ThreatController.find,
};
