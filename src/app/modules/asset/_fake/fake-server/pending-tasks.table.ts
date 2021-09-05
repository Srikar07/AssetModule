export class PendingTasksTable {
    public static pendingTasks: any = [
        {
            userId: 1,
            tasks: [
                {
                name: 'Deal Approvals',
                count: 2,
                taskName: 'dealApproval',
                tasksList: [{
                    id: 1,
                    dealName:"Deal --1",
                    dealAmount: 50000,
                    requestedBy: "Srikar",
                    requestedDate: "08/01/2021"
                },
                    {
                        id: 2,
                        dealName: "Deal --2",
                        dealAmount: 100,
                        requestedBy: "Palwinder",
                        requestedDate: "06/25/2021"
                    }
                ]

            }, {
                name: 'Updated Approver',
                count: 2,
                taskName: 'updateApprover'
            }, {
                name: 'Create Aquisitions',
                count: 100,
                taskName: 'createAquisitions'
            }, {
                name: 'Disposition in Process',
                count: 20,
                taskName: 'dispositionInProcess'
            }, {
                name: 'Transferring Projects',
                count: 30,
                taskName: 'transferringProjects'
            },]
        }]
}
