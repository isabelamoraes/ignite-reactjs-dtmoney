import { Summary } from "../Summary/indext";
import { TransactionTable } from "../TransactionsTable";

import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}