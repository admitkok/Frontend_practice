const fs = require('fs');

const bootstrapCSS = fs.readFileSync('./css/bootstrap.min.css', 'utf8');
const bootstrapIconsCSS = fs.readFileSync('./css/bootstrap-icons.css', 'utf8');
const crispyKitchenCSS = fs.readFileSync('./css/tooplate-crispy-kitchen.css', 'utf8');

function extractProjectName(cssContent) {
    const match = cssContent.match(/\.project-name\s*{\s*content:\s*["']([^"']+)["']/);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}

function extractIcons(cssContent) {
    const iconClasses = cssContent.match(/\.bi-[\w-]+/g) || [];
    return iconClasses.map(iconClass => {
        return {
            class: iconClass,
            content: iconClass.replace('bi-', ''),
            font: 'bootstrap-icons',
        };
    });
}

function extractBackgroundColor(cssContent) {
    const match = cssContent.match(/bg-rgb:\s*([^;]+);/);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}

const projectName = extractProjectName(bootstrapCSS + bootstrapIconsCSS + crispyKitchenCSS);
const icons = extractIcons(bootstrapIconsCSS);
const backgroundColor = extractBackgroundColor(bootstrapCSS + crispyKitchenCSS);

const manifest = {
    name: projectName,
    icons: icons,
    background_color: backgroundColor,
};

fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2));