import { Card, CardBody } from "@heroui/react";

    export default function Services() {
        return (
            <div>
                <h2 className="text-white text-4xl font-bold">Our Services</h2>
                <div className="flex flex-row gap-4">
                    <Card className="w-full">
                        <CardBody>
                            <h3 className="text-white text-2xl font-bold">Website Design</h3>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }   