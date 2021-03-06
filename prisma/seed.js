const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Node'
        },
      });

      const woopa5 = await prisma.explorer.upsert({
        where: { name: 'Woopa 5' },
        update: {},
        create: {
          name: 'Woopa 5',
                  username: 'ajolonauta5',
                  mission: 'Java'
        },
      });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

(async function main(){
  try {
    const explorer = await prisma.explorerInfo.upsert({
      where: {name: 'Explorer'},
      update: {},
      create:{
        name: "Explorer",
        lang: "JavaScript",
        missionComander: "Carlo",
      }
    })
    const explorer2 = await prisma.explorerInfo.upsert({
      where: {name: 'Explorer 2'},
      update: {},
      create:{
        name: "Explorer 2",
        lang: "JavaScript",
        missionComander: "Carlo",
      }
    })
    const explorer3 = await prisma.explorerInfo.upsert({
      where: {name: 'Explorer 3'},
      update: {},
      create:{
        name: "Explorer 3",
        lang: "Java",
        missionComander: "Fer",
      }
    })

    console.log("Create 3 explorers with info");
  }catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();