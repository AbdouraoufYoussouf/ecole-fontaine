import * as roleService from '../services/roleService.js';

export const createRole = (req, res) => {
  const roleData = req.body;
  roleService.createRole(roleData, (error, roleId) => {
    if (error) {
      console.error(`Erreur lors de la création du rôle : ${error}`);
      res.status(500).json({success: false,message:`Erreur serveur ${error} `});
    } else {
      res.status(201).json({ success: true, message: 'Rôle créé avec succès !', roleId: roleId });
    }
  });
};

export const getAllRoles = (req, res) => {
  roleService.getAllRoles((error, roles) => {
    if (error) {
      console.error(error);
      res.status(500).send({success: false,message:`Erreur serveur ${error} `});
    } else {
      res.json(roles);
    }
  });
};

export const getRoleById = (req, res) => {
  const roleId = req.params.id;
  roleService.getRoleById(roleId, (error, role) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    } else {
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).json({ error: 'Rôle introuvable' });
      }
    }
  });
};

export const updateRole = (req, res) => {
  const roleId = req.params.id;
  const roleData = req.body;
  roleService.updateRole(roleId, roleData, (error, updated) => {
    if (error) {
      console.error(error);
      res.status(500).json({success: false, message: 'Erreur lors de la mise à jour du rôle' });
    } else {
      if (updated) {
        res.json({ success: true, message: `Rôle ${roleId} mis à jour avec succès` });
      } else {
        res.status(404).json({ success: false, message: 'Rôle non trouvé' });
      }
    }
  });
};

export const deleteRole = (req, res) => {
  const roleId = req.params.id;
  roleService.deleteRole(roleId, (error, deleted) => {
    if (error) {
      res.status(500).json({ error: 'Erreur lors de la suppression du rôle' });
    } else {
      if (deleted) {
        res.status(200).json({ success: true, message: `Rôle ${roleId} supprimé avec succès` });
      } else {
        res.status(404).json({ success: false, error: 'Rôle non trouvé' });
      }
    }
  });
};



// import roleService from '../services/roleService.js';

// // Créer un rôle
// export const createRole = async (req, res) => {
//   try {
//     const roleId = await roleService.createRole(req.body);
//     res.status(201).json({ success: true, roleId });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Récupérer tous les rôles
// export const getAllRoles =  (req, res) => {
//   getAllRoles((error, roles) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Erreur serveur');
//     } else {
//       res.json(roles);
//     }
//   });
// };

// // Récupérer un rôle par son ID
// export const getRoleById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const role = await roleService.getRoleById(id);
//     if (role) {
//       res.status(200).json({ success: true, role });
//     } else {
//       res.status(404).json({ success: false, error: 'Role non trouvé' });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Mettre à jour un rôle
// export const updateRole = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const updated = await roleService.updateRole(id, req.body);
//     if (updated) {
//       res.status(200).json({ success: true,message:'Role modifié avec succes' });
//     } else {
//       res.status(404).json({ success: false, error: 'Role non trouvé' });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Supprimer un rôle
// export const deleteRole = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await roleService.deleteRole(id);
//     if (deleted) {
//       res.status(200).json({ success: true });
//     } else {
//       res.status(404).json({ success: false, error: 'Role non trouvé' });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };
