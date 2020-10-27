exports.seed = async function(knex) {
  await knex("resources").insert([
    { name: "paint", resource_description: "blue-pigmented viscous fluid"},
    { name: "paint brush", resource_description: "fibrous bundle for paint application"},
    { name: "lawn mower", resource_description: "bladed grass-blade serverer"},
    { name: "edge trimmer", resource_description: "lawn-edge trimming electric whirligig"},
  ]);
};
