# Licenses

This document contains license information for the dependencies used in this kiosk-playground project.

## Main Dependencies

| Package       | License      |
| ------------- | ------------ |
| @mysten/kiosk | MIT          |
| @mysten/sui   | Apache-2.0   |
| dotenv        | BSD-2-Clause |

## License Summary

Based on the analysis of the package.json, the project contains dependencies with the following licenses:

- MIT: 1 package
- Apache-2.0: 1 package
- BSD-2-Clause: 1 package

## License Descriptions

### MIT License

The MIT License is a permissive license that allows for reuse with few restrictions. It permits use, modification, and distribution of the code in both commercial and non-commercial applications, as long as the original copyright notice and license are included.

### Apache License 2.0

The Apache License 2.0 is a permissive license similar to MIT but with additional provisions addressing patent rights. It allows for free use, modification, and distribution of the code, with the requirement to include the original copyright notice and license.

### BSD-2-Clause License

The BSD-2-Clause license (also known as "Simplified BSD License" or "FreeBSD License") is a permissive license that allows for almost unrestricted use, modification, and distribution of the code, with the requirement to include the original copyright notice and license.

## Compliance Considerations

### Commercial Use

All licenses in this project are permissive and allow commercial use. MIT, Apache-2.0, and BSD-2-Clause licenses are business-friendly and impose minimal restrictions on usage, modification, and distribution.

## Disclaimer

This license information is provided as a reference and may not be completely accurate or up-to-date. It's recommended to verify the licenses of these dependencies before using them in production environments, especially for commercial applications.

## How to Verify Licenses

You can verify the licenses of your dependencies by running:

```bash
npx license-checker --summary
```

For a more detailed report:

```bash
npx license-checker --json > license-info.json
```

For specific packages:

```bash
npx license-checker --json | grep "package-name"
```
