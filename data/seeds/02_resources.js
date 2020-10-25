exports.seed = async function(knex) {
  await knex("resources").insert([
    { name: "paint", description: "blue-pigmented viscous fluid"},
    { name: "paint brush", description: "fibrous bundle for paint application"},
    { name: "lawn mower", description: "bladed grass-blade serverer"},
    { name: "edge trimmer", description: "lawn-edge trimming electric whirligig"},
  ]);
};
