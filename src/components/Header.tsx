import { useContext } from 'react';
import burger from '/assets/burger.svg';
import { SettingsActionsContext, SettingsContext } from '../lib/context';
import {
    TableClient,
    TableEntity,
    TableServiceClient,
    AzureNamedKeyCredential,
    odata,
} from '@azure/data-tables';
import { InteractiveBrowserCredential } from '@azure/identity';
async function azureTable() {
    let sasURL =
        'https://icsltn2qastore.table.core.windows.net/?sv=2022-11-02&ss=t&srt=sco&sp=rwdlacu&se=2123-05-17T10:14:54Z&st=2023-05-17T02:14:54Z&spr=https&sig=D1FbXTuBcFKeEJ5lUw14FlIFRb4kl2C84uU9c90aqEA%3D';

    const signinOpt = {
        tenantId: '4ec5bf5d-75cf-44f0-b6e4-0b796570b9b8',
        clientId: '5264e3a4-c5eb-4ebc-94aa-5cf767a307f0',
    };
    // const tableClient = new TableClient(
    //     'https://icsltn2qastore.table.core.windows.net',
    //     'questions'
    //     // new InteractiveBrowserCredential(signinOpt)
    // );
    // const endpoint = 'https://icsltn2qastore.table.core.windows.net/questions';
    // const credential = new AzureNamedKeyCredential(
    //     'icsltn2qastore',
    //     'W0RdN3HV9a3HnR4FCkUsIl4eVjcDPPVsJ/0TPtRthyVYILTctstwFGwUIsIZpXjhGW5zUazGkLbH+ASt+KyhPA=='
    // );
    // const tableService = TableServiceClient.fromConnectionString(
    //     '<connection-string>'
    // );
    // const tableClient = new TableClient(endpoint, '<table-name>', credential);

    let sasToken =
            '?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-18T00:28:14Z&st=2023-05-17T16:28:14Z&spr=https,http&sig=%2F0%2FcHEiRTcKSwpRtQnKsy0mTf3sL%2BXuDwEc90ZL%2BpEo%3D',
        connStr =
            'BlobEndpoint=https://icsltn2qastore.blob.core.windows.net/;QueueEndpoint=https://icsltn2qastore.queue.core.windows.net/;FileEndpoint=https://icsltn2qastore.file.core.windows.net/;TableEndpoint=https://icsltn2qastore.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-18T00:28:14Z&st=2023-05-17T16:28:14Z&spr=https,http&sig=%2F0%2FcHEiRTcKSwpRtQnKsy0mTf3sL%2BXuDwEc90ZL%2BpEo%3D',
        tableSrvUrl =
            'https://icsltn2qastore.table.core.windows.net/?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-18T00:28:14Z&st=2023-05-17T16:28:14Z&spr=https,http&sig=%2F0%2FcHEiRTcKSwpRtQnKsy0mTf3sL%2BXuDwEc90ZL%2BpEo%3D';

    // const connStr = 'https://icsltn2qastore.table.core.windows.net/';
    const resourceId =
        '/subscriptions/37534353-84f4-4580-b3dd-177a85715a6e/resourceGroups/storage-resources/providers/Microsoft.Storage/storageAccounts/icsltn2qastore/tableServices/default';
    const tableService = TableServiceClient.fromConnectionString(connStr, {});

    await tableService.createTable('test');
    const tableClient = new TableClient(sasURL, 'test');

    // const tableService = new TableServiceClient(endpoint, credential);
    const task = {
        partitionKey: 'hometasks',
        rowKey: '1',
        description: 'take out the trash',
        dueDate: new Date(2015, 6, 20),
    };

    let result = await tableClient.createEntity(task);
    console.log(result);

    // Entity create

    // tableClient
    //     .getEntity<TableEntity>('abc', 'def')
    //     .then((entity) => {
    //         console.log(entity);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
}

function Header() {
    const settings = useContext(SettingsContext);
    const setSettings = useContext(SettingsActionsContext);
    function toggleMenu() {
        setSettings({ ...settings, sidebarOn: !settings.sidebarOn });
    }
    return (
        <div className="burger-btn sticky top-0 min-h-[50px] px-4 flex items-center justify-between bg-green-700 ">
            <div>
                <img
                    className="cursor-pointer"
                    onClick={toggleMenu}
                    src={burger}
                    alt="Menu"
                />
            </div>
            <div
                onClick={() => {
                    // azureTable();
                }}
                className="text-slate-200 border-double border-b-4 text-xl cursor-pointer"
            >
                {settings.test?.title}
            </div>
            <div />
        </div>
    );
}

export default Header;
